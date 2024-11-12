import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-lg space-y-8 px-8 py-8">
      <h2 className="max-w-2xl text-3xl font-semibold">
        Like what you see? Reach out via email to collaborate!
      </h2>
      <Button asChild>
        <a href="mailto:joshua@joshuacano.com">Email Me</a>
      </Button>
    </div>
  );
};
