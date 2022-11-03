import React, { useEffect } from "react";
import { selectTaskCount } from "../APIRequest/TaskAPI";
import { useSelector } from "react-redux";

function Dashboar() {
    useEffect(() => {
        selectTaskCount();
    }, []);
    const SummaryList = useSelector((state) => state.summary.taskSammary);
    return (
        <div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1">
                            <i className="fa-solid fa-plus"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">New</span>
                            {SummaryList.map((item, i) => 
                                <span key={i.toString()} className="info-box-number">{item._id === 'new' ? item.total : ''}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-danger elevation-1">
                            <i className="fa-solid fa-bars-progress"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Progress</span>
                            {SummaryList.map((item, i) => 
                                <span key={i.toString()} className="info-box-number">{item._id === 'progress' ? item.total : ''}</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="clearfix hidden-md-up"></div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-success elevation-1">
                            <i className="fa-solid fa-list-check"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Complete</span>
                            {SummaryList.map((item, i) => 
                                <span key={i.toString()} className="info-box-number">{item._id === 'complete' ? item.total : ''}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-warning elevation-1">
                            <i className="fa-solid fa-ban"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Canceled</span>
                            {SummaryList.map((item, i) => 
                                <span key={i.toString()} className="info-box-number">{item._id === 'cancel' ? item.total : ''}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboar;
