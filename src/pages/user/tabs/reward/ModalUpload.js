import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../member/css/Modal.css";
import { imageLink } from "../../../../constant/image";
import { imageUploadAPI, updateImageAPI } from "../../../../apis/award";

function ModalUpload(props) {
    const [_rank, set_rank] = useState("");
    const [_image, set_image] = useState("");
    const [link, set_link] = useState(imageLink);

    useEffect(() => {
        uploadImgur();
    }, [_image]);

    // -----------------------
    const uploadImgur = () => {
        let form = new FormData();
        form.append("image", _image);
        var settings = {
            url: `https://api.imgur.com/3/image`,
            method: "POST",
            timeout: 0,
            headers: {
                Authorization: "Client-ID dbe7728e0d4ff39 ",
            },
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: form,
        };

        axios(settings)
            .then((res) => {
                if (res.data.status == 200) {
                    console.log(res.data.data.link);
                    set_link(res.data.data.link);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    // -----------------------
    const onSubmitImage = async () => {
        let awardID = document
        .getElementById("file-id")
        .getAttribute("value");
        const res = await imageUploadAPI(link, _rank, awardID);
        if(res.data.code == 1000){
            document.getElementById(awardID+"-child").getElementsByClassName("rank")[0].innerHTML = "Thành tích: " +_rank;
            document.getElementById(awardID+"-child").getElementsByClassName("img")[0].setAttribute("src",link);
            
        }
        console.log(res.data);
    };

    return (
        <div id="add-proof" class="modal add-proof-modal">
            <div class="modal-content">
                <h4>Thêm hồ sơ nhận phần thưởng</h4>

                <div class="row">
                    <div class="input-field col s12">
                        <select
                            value={_rank}
                            onChange={(e) => set_rank(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Chọn thành tích
                            </option>
                            <option value="Học sinh giỏi">Học sinh giỏi</option>
                            <option value="Học sinh khá">Học sinh khá</option>
                            <option value="Học sinh trung bình">
                                Học sinh trung bình
                            </option>
                        </select>
                        <label>Thành tích</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input
                            id="proof"
                            type="file"
                            accept="image/*"
                            // class="validate"
                            onChange={(e) => {
                                set_image(e.target.files[0]);
                            }}
                        />

                        <label for="proof">Minh chứng</label>
                    </div>
                </div>
                <div class="row left">
                    <div class="col s12">
                        <img src={link} style={{ width: 50, height: 50 }} />
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a
                    onClick={() => onSubmitImage()}
                    class="modal-close waves-effect waves-light indigo accent-3 white-text btn-small button-1"
                >
                    Thêm
                </a>
            </div>
        </div>
    );
}

export default ModalUpload;
