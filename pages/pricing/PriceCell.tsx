import { Group, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export interface PriceCellProps {
  normalPrice?: number | string;
  discountPrice?: number | string;
}

export default function PriceCell({
  normalPrice,
  discountPrice = normalPrice,
}: PriceCellProps) {
  const { t } = useTranslation("common");
  const currency = t("currency");

  if (normalPrice == null) {
    return (
      <td>
        <Title fz="lg">{t("notApplicable")}</Title>
      </td>
    );
  }
  if (normalPrice === discountPrice) {
    return (
      <td>
        <Title fz="lg">
          {normalPrice} {currency}
        </Title>
      </td>
    );
  }

  return (
    <td>
      <Group>
        <Text td="line-through" fz="xs">
          {normalPrice} {currency}
        </Text>
        <Title c="red" fz="lg">
          {discountPrice} {currency}
        </Title>
      </Group>
    </td>
  );
}
