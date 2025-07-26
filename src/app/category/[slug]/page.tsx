type Props = {
  params: { slug: string };
};

export default function CategoryPage({ params }: Props) {
  return <h1>Category: {params.slug}</h1>;
}