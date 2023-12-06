import React, { useState } from "react";
import { Tab, TabWrapper } from "../../components/tab";
import Registration from "../../components/home/registration";
import Details from "../../components/home/details";
import Preferences from "../../components/home/preferences";
import Song from "../../components/home/song";

function HomePage() {
  const [activeTab, setActiveTab] = useState("registration");

  const tabList = [
    {
      key: "Registration",
      value: "registration",
    },
    {
      key: "Details",
      value: "details",
    },
    {
      key: "Preferences",
      value: "preferences",
    },
    {
      key: "Song",
      value: "song",
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

  const updateTab = (value) => {
    setActiveTab(value);
  };
  return (
    <div>
      <Tab
        items={tabList}
        defaultTab="registration"
        sticky
        onChange={(value) => updateTab(value)}
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
