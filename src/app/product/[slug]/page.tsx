type Props = {
  params: { slug: string };
};

export default function ProductPage({ params }: Props) {
  return <div>Product slug: {params.slug}</div>;
}
