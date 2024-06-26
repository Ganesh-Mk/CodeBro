import { useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useSelector } from "react-redux"; // Ensure this import is included
import "../style/style.css";

const CodeEditor = ({ language, value, setValue, onMount }) => {
  const problemId = useSelector((state) => state.problemObj.obj.number);

  useEffect(() => {
    const savedCode = localStorage.getItem(`savedCode_${problemId}`);
    if (savedCode) {
      setValue(savedCode);
    } else {
      setValue(value);
    }
  }, [problemId, setValue]);

  const handleEditorChange = (newValue) => {
    setValue(newValue);
    localStorage.setItem(`savedCode_${problemId}`, newValue);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="100%">
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: "17rem",
              detectIndentation: false,
              suggestOnTriggerCharacters: false,
              tabSize: 4,
              quickSuggestions: false,
            }}
            height="50vh"
            theme="vs-dark"
            language={language}
            onMount={onMount}
            value={value}
            onChange={handleEditorChange}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default CodeEditor;
