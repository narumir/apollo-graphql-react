import React from 'react';
import {
  useQuery,
} from "@apollo/react-hooks";
import {
  TODOS,
} from "src/graphql";

export const App = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(TODOS, {
    variables: {
      id: "test"
    }
  });
  if (loading) {
    return (<span>데이터 로드중...</span>);
  }
  if (error || data == null) {
    return (<span>오류가 발생하였습니다. 관리자에게 문의 해주세요.</span>);
  }
  return (
    <div>
      version: {JSON.stringify(data)}
    </div>
  );
};
