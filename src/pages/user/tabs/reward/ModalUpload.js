import React, { useState } from "react";
import axios from "axios";
import "../../member/css/Modal.css";

// import ImageUploader from "react-images-upload";

function ModalUpload() {
    const [_name, set_name] = useState("");
    const [_achievement, set_achievement] = useState("");
    const [_image, set_image] = useState("");

    // -----------------------
    const submit = (e) => {
        // e.preventDefault();
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
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    // -----------------------

    return (
        <div id="add-proof" class="modal">
            <div class="modal-content">
                <h4>Thêm hồ sơ nhận phần thưởng</h4>
                <div class="row">
                    <div class="input-field col s12">
                        <input
                            id="name"
                            type="text"
                            class="validate"
                            value={_name}
                            onChange={(e) => set_name(e.target.value)}
                        />
                        <label for="name">Họ và tên</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <select
                            value={_achievement}
                            onChange={(e) => set_achievement(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Chọn thành tích
                            </option>
                            <option value="Học sinh khá">Học sinh khá</option>
                            <option value="Học sinh giỏi">Học sinh giỏi</option>
                            <option value="Học sinh cực giỏi">
                                Học sinh cực giỏi
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
                            class="validate"
                            onChange={(e) => {
                                set_image(e.target.files[0]);
                            }}
                        />
                        {/* <ImageUploader
                            withIcon={true}
                            buttonText="Choose images"
                            onChange={(picture) => set_image(picture)}
                            imgExtension={[".jpg", ".png"]}
                        /> */}
                        <label for="proof">Minh chứng</label>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a
                    onClick={() => submit(_image)}
                    class="modal-close waves-effect waves-light indigo accent-3 white-text btn-small button-1"
                >
                    Thêm
                </a>
            </div>
        </div>
    );
}

export default ModalUpload;
