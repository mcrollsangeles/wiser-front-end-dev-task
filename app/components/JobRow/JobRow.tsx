import type { Job } from "@/data/mockJobs";
import Link from "next/link";
import Image from "next/image";
import styles from "./JobRow.module.scss";

type Props = {
  job: Job;
};

export function JobRow({ job }: Props) {
  const brandToAsset: Record<string, string> = {
    NEXT: "next.png",
    "Victoria’s Secret": "victoria.png",
    JOULES: "joules.png",
    GAP: "gap.png",
    LIPSY: "lipsy.png",
    MADE: "made.png",
    "Cath Kidston": "cath.png",
  };

  const assetFile = brandToAsset[job.brand];

  return (
    <div className={styles.row}>
      <div className={styles.meta}>
        <h2 className={styles.title}>{job.title}</h2>
        <p className={styles.team}>{job.team}</p>
      </div>

      <div className={styles.brand} aria-label={`${job.brand} brand`}>
        {assetFile ? (
          <Image
            src={"/" + assetFile}
            alt={job.brand + " logo"}
            width={90}
            height={32}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          job.brand
        )}
      </div>

      <p className={styles.location}>{job.location}</p>

      <div className={styles.ctaWrapper}>
        <Link className={styles.cta} href={job.link}>
          View job
        </Link>
      </div>
    </div>
  );
}
