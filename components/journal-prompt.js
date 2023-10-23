import React from "react";
import prompts from "../data/journal-prompts.json";
import styles from "../components/home.module.css";

export default function JournalPrompt() {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const monthName = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const daySuffix = getDaySuffix(dayOfMonth);

  const formattedDate = `${monthName} ${dayOfMonth}${daySuffix} ${year}`;

  const promptOfTheDay = prompts.find(
    (item) => item.date === `${monthName} ${dayOfMonth}`
  );

  return (
    <div className={styles['body']}>
      <div className={styles["date"]}>
        <h2>{`Prompt for ${formattedDate}`}</h2>
      </div>
      <div className={styles["prompt"]}>
        {promptOfTheDay && (
          <p>{promptOfTheDay.prompt}</p>
        )}
      </div>
    </div>
  );
}
