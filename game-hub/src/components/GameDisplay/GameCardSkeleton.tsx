import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children : ReactNode
}

const GameCardSkeleton = ({children} : Props) => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton