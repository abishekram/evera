import React from "react";
import MonacoEditor from "react-monaco-editor";


const options = {
  selectOnLineNumbers: true
};
const RequestBody = () => (
  <div style={{ marginTop: "1rem" }}>
    
    <MonacoEditor
      height="600"
      language="javascript"
      theme="vs"
      options={options}
      value=""
    />
  </div>
);

export default RequestBody;
