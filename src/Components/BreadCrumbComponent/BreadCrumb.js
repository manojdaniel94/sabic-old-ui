import React from "react";
import { useCommonState } from "../../context/common";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useCommonDispatch } from "../../context/common/context";



const BreadCrumb = () => {
    const navigate = useNavigate()
    const { breadCrumbsList } = useCommonState();
    const dispatchCommon = useCommonDispatch();

    const _getCommonAction = (item) => dispatchCommon({ type: "ADD_BREAD_CRUMBS", payload: item });

    const onClickFunction = (key) => {
        console.log(key)
        if (key !== "") {
            navigate(`/${key}`)
        }
    }
    return (
        <div id="content-breadcrumb">
            {
                breadCrumbsList && breadCrumbsList.map((user, i) => (
                    <a class={user.title === "sabic" ? "disabled-link" : "enabled-link"} onClick={() => { onClickFunction(user.key); _getCommonAction({ title: user.title, key: user.key }); }}> {user.title}</a>
                ))
            }
        </div>
    );
};

export default BreadCrumb;