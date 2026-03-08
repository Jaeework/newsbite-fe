import { Languages } from "lucide-react";
import Button from "../../../components/ui/button/Button";

interface NewsParagraphProps {
  content: string;
  translated_content: string;
  index: number;
}

const NewsParagraph = ({
  content,
  translated_content,
  index,
}: NewsParagraphProps) => {
  return (
    <div className="flex">
      <p className="inline">
        {index + 1}문단: {content}
      </p>
      <Button
        size="xs"
        variant="primary"
        radius="lg"
        onClick={() => {
          alert(`${translated_content}`);
        }}
      >
        <Languages size={15} />
      </Button>
    </div>
  );
};

export default NewsParagraph;
