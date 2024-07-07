import "../style/CodeHeader.scss";
import LanguageSelector from "./LanguageSelector";
import { Button, Tooltip } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { AllquesObject } from "../javascripts/data";

function CodeHeader({
  language,
  isLoadingSubmit,
  isLoading,
  runCode,
  onSelect,
  submitCode,
  setValue,
}) {
  const problemObj = useSelector((state) => state.problemObj.obj);
  const problemId = problemObj.number;
  
  function handleResetCode() {
    let defaultCode = "";
    switch (language) {
      case "javascript":
        defaultCode = AllquesObject[problemId - 1].javascriptDefaultCode;
        break;
      case "python":
        defaultCode = AllquesObject[problemId - 1].pythonDefaultCode;
        break;
      case "java":
        defaultCode = AllquesObject[problemId - 1].javaDefaultCode;
        break;
      default:
        defaultCode = "";
    }
    setValue(defaultCode);
    localStorage.removeItem(`savedCode_${problemId}_${language}`);
  }

  return (
    <div className="codeHeader" style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: "2vw" }}>
        <Tooltip label="Reset the code" aria-label="Reset the code">
          <Button
            w={"100%"}
            variant="outline"
            colorScheme="blue"
            onClick={handleResetCode}
          >
            <RepeatIcon />
          </Button>
        </Tooltip>
        <LanguageSelector language={language} onSelect={onSelect} />
      </div>

      <div style={{ display: "flex", gap: "2vw" }}>
        <Button
          className="codeHeaderBtns"
          variant="outline"
          colorScheme="green"
          w={"100%"}
          mb={3}
          fontSize={17}
          isLoading={isLoading}
          onClick={runCode}
        >
          Run
        </Button>
        <Button
          className="codeHeaderBtns"
          variant="solid"
          colorScheme="green"
          w={"100%"}
          mb={3}
          mr={3}
          isLoading={isLoadingSubmit}
          onClick={submitCode}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default CodeHeader;
