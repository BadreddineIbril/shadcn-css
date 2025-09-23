interface HeadProp {
  heading: string;
  subheading: string;
}

export default function Head({ heading, subheading }: HeadProp) {
  return (
    <section data-misc="head">
      <h1 className="heading">{heading}</h1>
      <p className="subheading">{subheading}</p>
    </section>
  );
}
