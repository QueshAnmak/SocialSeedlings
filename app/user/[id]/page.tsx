import GridView from "@components/GridView";
import User from "@components/User";
import styles from "./index.module.css";

export default function Page ( { params }: { params: { username: string; }; } )
{
  return (
    <section className={ styles.container }>

      <User />

      <GridView />

    </section>
  );
}