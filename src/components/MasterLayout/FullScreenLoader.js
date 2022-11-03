import React from "react";
import { useSelector } from "react-redux";
import load from "../../assets/img/loader.svg";

function FullScreenLoader() {
    const loader = useSelector((state) => state.setting.loader);
    return (
        <div className={`${loader}`}>
            <div
                className={`d-flex h-100 aligns-items-center justify-content-center`}
            >
                <img
                    src={load}
                    alt="loader"
                    style={{ width: "100px", height: "100px" }}
                />
            </div>
        </div>
    );
}

export default FullScreenLoader;
