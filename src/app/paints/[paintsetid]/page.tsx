type PageProps = {
  params: { paintsetid: string };
};

export default function MyPaintsId({ params }: PageProps) {
  return <h2>MyPaintsId is {params.paintsetid} </h2>;
}
