import React from 'react';
import {
  useQuery,
} from "@apollo/react-hooks";
import {
  APPLICATION_VERSION,
  ApplicationVersion,
} from "src/graphql";

export const App = () => {
  const {
    data,
    loading,
    error,
  } = useQuery<ApplicationVersion>(APPLICATION_VERSION, {});
  if (loading) {
    return (<span>데이터 로드중...</span>);
  }
  if (error || data == null) {
    return (<span>오류가 발생하였습니다. 관리자에게 문의 해주세요.</span>);
  }
  return (
    <div>
      version: {data.version}
    </div>
  );
};
