import HaloButton from "./ui/HaloButton";
import styles from "./PillarCard.module.css";

interface PillarCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  featured?: boolean;
}

export default function PillarCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  featured = false,
}: PillarCardProps) {
  return (
    <article
      className={`${styles["pillar-card"]} ${featured ? styles["pillar-card-featured"] : ""}`}
    >
      <span className={styles["pillar-card-inner"]} aria-hidden />
      <div className={styles["pillar-card-body"]}>
        <span className={styles["pillar-card-icon"]} aria-hidden>
          {icon}
        </span>
        <div className={styles["pillar-card-content"]}>
          <p className={styles["pillar-card-title"]}>
            {title}
            <span>{description}</span>
          </p>
          <HaloButton href={href} variant="primary" size="sm" fullWidth className="mt-auto">
            {linkLabel}
          </HaloButton>
        </div>
      </div>
    </article>
  );
}
