import Link from "next/link";
import styles from "./JobDetail.module.scss";
import { mockJobs } from "@/data/mockJobs";
import { notFound } from "next/navigation";

// just a simple dynamic routing
export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.link.split("/").pop() === slug);
  if (!job) return notFound();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        Back
      </Link>
      <h1 className={styles.title}>{job.title}</h1>
      <ul className={styles.details}>
        <li>
          <strong>ID:</strong> {job.id}
        </li>
        <li>
          <strong>Title:</strong> {job.title}
        </li>
        <li>
          <strong>Team:</strong> {job.team}
        </li>
        <li>
          <strong>Brand:</strong> {job.brand}
        </li>
        <li>
          <strong>Location:</strong> {job.location}
        </li>
      </ul>
    </div>
  );
}
