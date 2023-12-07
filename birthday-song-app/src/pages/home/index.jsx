import React, { useState } from "react";
import { Tab, TabWrapper } from "../../components/tab";
import Registration from "../../components/home/registration";
import Details from "../../components/home/details";
import Preferences from "../../components/home/preferences";
import Song from "../../components/home/song";
import { useTabSelector } from "../../store/selectors/tab";
import { useDetailsSelector } from "../../store/selectors/details";
// import { updateTab } from "../../store/slices/tab";
// import { useDispatch } from "react-redux";

function HomePage() {
  const activeTab = useTabSelector();
  const details = useDetailsSelector();
  console.log(details);

  const tabList = [
    {
      key: "Registration",
      value: "registration",
      id: 0,
    },
    {
      key: "Details",
      value: "details",
      id: 1,
    },
    {
      key: "Preferences",
      value: "preferences",
      id: 2,
    },
    {
      key: "Song",
      value: "song",
      id: 3,
    },
  ];

  const tabPanels = [
    {
      value: "registration",
      component: <Registration />,
    },
    {
      value: "details",
      component: <Details />,
    },
    {
      value: "preferences",
      component: <Preferences />,
    },
    {
      value: "song",
      component: <Song />,
    },
  ];

  return (
    <div>
      <Tab
        items={tabList}
        defaultTab="registration"
        sticky
        onChange={(value) => {}}
        value={activeTab}
        containerClass="flex justify-center"
      />

      <TabWrapper
        tabs={tabPanels}
        value={activeTab}
        defaultTab={"registration"}
        itemClass="mx-6 dark-scrollbar"
      />
    </div>
  );
}

export default HomePage;
