import React, {useContext} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Paragraph,
  ResponsiveContext,
} from "grommet";

export default function CardTemplate  ({ title, paragraph, footer })  {
    const size = useContext(ResponsiveContext);
    return (
      <Card>
        <CardHeader pad="medium">
          <Heading level={2} margin="none">
            {title}
          </Heading>
        </CardHeader>
        <CardBody pad="medium">
          <Paragraph maxLines={size === "small" ? 3 : undefined}>
            {paragraph}
          </Paragraph>
        </CardBody>
        <CardFooter pad="medium" background="background-contrast">
          {footer}
        </CardFooter>
      </Card>
    );
  };