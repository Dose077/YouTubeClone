import React from "react";
import {
  HouseDoorFill,
  Fire,
  MusicNote,
  Film,
  Broadcast,
  Newspaper,
  Controller,
  Trophy,
  Lightbulb,
  Flower2,
  Gear,
  Flag,
  QuestionCircle,
  ChatLeftDots,
} from "react-bootstrap-icons";

export const categories = [
  { name: "New", icon: <HouseDoorFill />, type: "home" },
  { name: "Trending", icon: <Fire />, type: "category" },
  { name: "Music", icon: <MusicNote />, type: "category" },
  { name: "Films", icon: <Film />, type: "category" },
  { name: "Live", icon: <Broadcast />, type: "category" },
  { name: "Gaming", icon: <Controller />, type: "category" },
  { name: "News", icon: <Newspaper er />, type: "category" },
  { name: "Sports", icon: <Trophy />, type: "category" },
  { name: "Learning", icon: <Lightbulb />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <Flower2 />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <Gear />, type: "menu" },
  { name: "Report History", icon: <Flag />, type: "menu" },
  { name: "Help", icon: <QuestionCircle />, type: "menu" },
  { name: "Send feedback", icon: <ChatLeftDots />, type: "menu" },
];
