import React, { ReactElement } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Loader from "./Loader/Loader";
import ViewError from "./ViewError/ViewError";
import { Container } from "./ViewContainer.styled";

interface Props {
  status: QueryStatus;
  children?: React.ReactNode;
}

const ViewContainer = ({ status, children }: Props): ReactElement => (
  <Container>
    {
      {
        [QueryStatus.uninitialized]: <Loader />,
        [QueryStatus.pending]: <Loader />,
        [QueryStatus.fulfilled]: children || null,
        [QueryStatus.rejected]: <ViewError />,
      }[status]
    }
  </Container>
);

export default ViewContainer;
