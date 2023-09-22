import React from "react";
import { ReactDOM } from "react";

function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)







}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://www.google.com',
        target: '_blank',
    },
    children: 'Click on it'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer);