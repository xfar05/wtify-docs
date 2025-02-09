import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Wtify bot menawarkan tampilan yang modern dan intuitif, memudahkan interaksi dengan dashboard. Hanya dengan beberapa klik, kamu dapat dengan mudah membuat WhatsApp bot sendiri.
      </>
    ),
  },
  {
    title: 'Feature',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Wtify bot ini memiliki beragam fitur, dengan lebih dari 150 fitur yang terdiri dari menu ai, group, game, tools, downloader, search, dan sticker. Fitur-fitur ini dapat digunakan untuk hiburan maupun pengelolaan komunitas.
      </>
    ),
  },
  {
    title: 'Customize',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kamu dapat menyesuaikan dan mengubah berbagai aspek bot milikmu, seperti respons, menu, pengaturan command, tampilan, dan lainnya.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
