import { Container } from "@/components/container";
import { UpdateFlightForm } from "@/features/flights/components/update-flight-form";
import { getFlightById } from "@/features/flights/data";
import { Metadata } from "next";
import { Params } from "next/dist/server/request/params";

export const metadata = (): Metadata => {
  return {
    title: "Edit Flight",
  };
};

const EditFlightPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const { flight } = await getFlightById(id as string);

  return (
    <Container className="py-10">
      <UpdateFlightForm flight={flight} />
    </Container>
  );
};

export default EditFlightPage;
