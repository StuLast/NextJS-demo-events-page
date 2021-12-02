import styles from './main-footer.module.css'

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <p>This website is purely a demo website and does not present any real events, dates, or addresses.</p>
          <p>The public source code for this demo website can be found at <a href="https://github.com/StuLast/NextJS-demo-events-page">https://github.com/StuLast/NextJS-demo-events-page</a></p>
          <p>This website was built by Stu Last of Spyced Concepts</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
