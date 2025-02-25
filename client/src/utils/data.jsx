import React from "react";
import LocalFireDepartmentRounded from "@mui/icons-material/LocalFireDepartmentRounded";
import FitnessCenterRounded from "@mui/icons-material/FitnessCenterRounded";
import TimelineRounded from "@mui/icons-material/TimelineRounded";

const IconWrapper = ({ Icon }) => (
  <Icon sx={{ color: "inherit", fontSize: "26px" }} />
);

export const counts = [
  {
    name: "Calories Burned",
    icon: () => <IconWrapper Icon={LocalFireDepartmentRounded} />,
    desc: "Total calories burned today",
    key: "totalCaloriesBurnt",
    unit: "kcal",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
  },
  {
    name: "Workouts",
    icon: () => <IconWrapper Icon={FitnessCenterRounded} />,
    desc: "Total no of workouts for today",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
  },
  {
    name: "Average Calories Burned",
    icon: () => <IconWrapper Icon={TimelineRounded} />,
    desc: "Average Calories Burned on each workout",
    key: "avgCaloriesBurntPerWorkout",
    unit: "kcal",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
  },
];
