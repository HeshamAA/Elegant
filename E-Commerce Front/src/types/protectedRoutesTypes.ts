type ConditionType = string | boolean | (() => boolean);

export type IProtectedRoutesProps = {
  condition: ConditionType;
  children: React.ReactNode;
};
