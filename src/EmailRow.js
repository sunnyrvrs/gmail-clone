import React from 'react';
import "./EmailRow.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Checkbox, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
        );

        navigate("/mail")
    };

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <div className="emailRow__title">
                {title}
            </div>
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
