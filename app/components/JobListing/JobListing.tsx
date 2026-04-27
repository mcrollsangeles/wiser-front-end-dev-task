import { mockJobs } from "@/data/mockJobs";

import { JobRow } from "../JobRow/JobRow";
import styles from "./JobListing.module.scss";

export function JobListing() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        {mockJobs.map((job) => (
          <JobRow key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
