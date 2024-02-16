import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import "./ModalOrder.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoIosArrowDropright } from "react-icons/io";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ModalOrder = ({ onToggle }) => {
  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [status, setStatus] = useState(1);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const storedSelectedFoods = localStorage.getItem("selectedFoods");

  useEffect(() => {
    // Retrieve items from local storage
    if (storedSelectedFoods) {
      setSelectedFoods(JSON.parse(storedSelectedFoods));
    }
  }, []);

  useEffect(() => emailjs.init("jRNdHRU4JF2C2WFGW"), []);

  const handleOk = () => {
    setStatus(2);
  };
  const handleCancel = () => {
    setOpen(false);
    onToggle(false);
  };

  const backToStatus = () => {
    setStatus(1);
  };

  const handleConfirmAddress = async () => {
    const serviceId = "service_1o87llb";
    const templateId = "template_k4e0h22";
    try {
      const send = await emailjs.send(serviceId, templateId, {
        name: name,
        address: address,
        number: number,
        listFood: storedSelectedFoods,
        note: note,
      });
      setOpen(false);
      toast.success("Erfolg !");
    } catch (error) {
      toast.error("Ein Fehler ist aufgetreten");
      console.error("Error calling API:", error);
    }
  };

  const handleDeleteItem = (category, index) => {
    const updatedSelectedFoods = { ...selectedFoods };
    updatedSelectedFoods[category] = selectedFoods[category].filter(
      (item, i) => i !== index
    );

    // If category length becomes zero, remove the category from selectedFoods
    if (updatedSelectedFoods[category].length === 0) {
      delete updatedSelectedFoods[category];
    }

    setSelectedFoods(updatedSelectedFoods);
    // Update local storage with the updated data
    localStorage.setItem("selectedFoods", JSON.stringify(updatedSelectedFoods));
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      {status == 1 && (
        <Modal
          title="Deine Bestellung"
          open={open}
          onOk={handleOk}
          cancelText="Wählen Sie weiterhin Gerichte aus..."
          okText="Nächste"
          titleColor="#ce2329"
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {Object.keys(selectedFoods).map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-primary-200 text-xl font-bold">
                {category}:
              </h3>
              <ul className="text-primary-100 px-8">
                {selectedFoods[category].map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}$</span>
                    <button
                      onClick={() => handleDeleteItem(category, itemIndex)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <hr></hr>
          <>
            <div className="flex justify-between text-primary-100 text-lg px-8">
              <span className="font-semibold">Gesamt:</span>
              <span>
                {" "}
                {Object.keys(selectedFoods).reduce((total, key) => {
                  return (
                    total +
                    selectedFoods[key].reduce(
                      (subTotal, item) => subTotal + item.price,
                      0
                    )
                  );
                }, 0)}
                $
              </span>
            </div>
          </>
        </Modal>
      )}
      {status == 2 && (
        <Modal
          title="Deine Bestellung"
          open={open}
          onOk={handleConfirmAddress}
          cancelText="Wählen Sie weiterhin Gerichte aus..."
          okText="Nächste"
          titleColor="#ce2329"
          onCancel={backToStatus}
        >
          <form className="">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name*"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="address"
                placeholder="address*"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                onChange={(e) => setNote(e.target.value)}
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
export default ModalOrder;
