import React from "react";
import Home from "../../components/templates/Home";
import DefaultLayout from "../../layouts/DefaultLayout";

export { Page };

// @ts-ignore
function Page({header,homeBanner,footer,advantages = [],apartments = [],...props}) {
  console.log(props)
  return (
    <DefaultLayout header={header} footer={footer}>
        <Home {...props}  homeBanner={homeBanner} advantages={advantages} apartments={apartments} />
    </DefaultLayout>
  );
}