import React from "react";
import Expediture from "./expediture/Expediture.js";
import Reward from "./reward/Reward";
import "./css/TabContainer.css";
import ModalUpload from "./reward/ModalUpload";

function TabContainer() {
    return (
        <>
        <ModalUpload />
        <div className="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s3">
                        <a
                            href="#test1"
                            class="active indigo-text text-accent-3"
                        >
                            Khoản thu
                        </a>
                    </li>
                    <li class="tab col s3">
                        <a href="#test2" class="indigo-text text-accent-3">
                            Phần thưởng
                        </a>
                    </li>
                </ul>
            </div>
            <Expediture />
            <Reward />
        </div>
        </>
    );
}

export default TabContainer;
