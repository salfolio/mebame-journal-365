import React from "react";
import prompts from "../data/journal-prompts.json";
import styles from "../components/journal-prompt.module.css";

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
    <div>
      <div className={styles["header"]}>
        <h1 className={styles["title"]}>Journal 365</h1>
        <h2 className={styles['date']}>{formattedDate}</h2>
      </div>
      <div className={styles["body"]}>
        {promptOfTheDay && (
          <p className={styles["prompt"]}>{promptOfTheDay.prompt}</p>
        )}
      </div>
    </div>
  );
}
