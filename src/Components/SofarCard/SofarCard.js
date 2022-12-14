import React, { useEffect, useState } from "react";
import CustomButton from "../Button/CustomButton";
import styled from "./Sofar.module.scss";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Typography from "@mui/material/Typography";
import { Zoom } from "react-reveal";
import CancelIcon from "@mui/icons-material/Cancel";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { style } from "@mui/system";
const SofarCard = ({ data }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      background: "#fff",
      marginTop: "3rem",
      height: "calc(100vh - 8rem)",
      width: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-40%",
      transform: "translate(-50%, -50%)",
      overflowX: "hidden",
    },
  };
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [Isdata, setIsData] = useState();
  const [loading, setLoading] = useState(true);
  const [modaldata, setModalData] = useState();
  const [productData, setProductData] = useState([]);

  useEffect(() => setProductData(data), [data]);

  function openModal(item) {
    setModalData(item);
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "red";
  }

  function closeModal() {
    setIsOpen(false);
  }
  let projects = [];
  const seprateCategories = (value) => {
    if (value === "all") return data;
    let filteredCaterogies = data?.filter(
      (item, i) => item?.fields?.categories === value
    );
    return filteredCaterogies;
  };
  return (
    <div className={styled.CardContainer}>
      <div className={styled.Buttons}>
        <button onClick={() => setProductData(seprateCategories("all"))}>
          All
        </button>
        <button onClick={() => setProductData(seprateCategories("Event"))}>
          Events
        </button>
        <button onClick={() => setProductData(seprateCategories("Course"))}>
          Course
        </button>
      </div>
      <div className={styled.Images}>
        {productData?.map((item, index) => (
          <>
            <div className={styled.imgs} key={index}>
              <Zoom>
                <ImgOverlay
                  imgSrc={item?.fields.image?.fields?.file?.url}
                  bgColor="rgba(0,0,0,0.7)"
                  position="top"
                  width="50%"
                  paddingBottom="1rem"
                  height="20rem"
                  fColor="gray"
                >
                  <div className={styled.ViewStory}>
                    <div className={styled.btnWrapper}>
                      <button onClick={() => openModal(item)}>
                        View <span>Story</span>
                      </button>
                    </div>
                    <small>{item?.fields?.heading}</small>
                  </div>
                </ImgOverlay>
              </Zoom>
            </div>
          </>
        ))}
      </div>
      <div className="modal_wrapper">
        <Modal
          onClose={() => setIsOpen(false)}
          isOpen={modalIsOpen}
          style={customStyles}
        >
          <div className="viewMore">
            <div className="cancelIcon">
              <button onClick={() => setIsOpen(false)}>
                <CancelIcon />
              </button>
            </div>
            <img
              className="project_img"
              src={modaldata?.fields?.image?.fields?.file?.url}
            />
            <h2>{modaldata?.fields?.heading}</h2>
            <ul>
              {modaldata?.fields?.client && (
                <li>
                  <strong>Client : </strong>
                  {modaldata?.fields?.client}
                </li>
              )}
              {modaldata?.fields?.date && (
                <li>
                  <strong>Date :</strong>
                  {modaldata?.fields?.date.slice(0, 10)}
                </li>
              )}
              <li>
                <strong>Categories :</strong>
                {modaldata?.fields?.categories}
              </li>
            </ul>
            <div
              dangerouslySetInnerHTML={{
                __html: modaldata?.fields?.discription,
              }}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default SofarCard;
