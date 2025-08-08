import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";

interface QuestionSetForm {
  title: string;
  questions: {
    questionText: string;
    correctAnswer: string;
    choices: { text: string; label: string }[];
  }[];
}

function CreateQuestionSetForm() {
  const defaultValues: QuestionSetForm = {
    title: "",
    questions: [
      {
        questionText: "",
        correctAnswer: "",
        choices: [],
      },
    ],
  };

  const methods = useForm({ defaultValues });
  const { watch, register } = methods;
  console.log("form values => ", watch());
  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <div>
            <label>Enter Title</label>
            <input {...register("title")} placeholder="Enter Title" />
          </div>
          <CreateQuestions />
        </form>
      </FormProvider>
    </div>
  );
}

function CreateQuestions() {
  const { register, control } = useFormContext<QuestionSetForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const AddQuestionHandler = () => {
    append({
      choices: [],
      correctAnswer: "",
      questionText: "",
    });
  };

  return (
    <div>
      <h1>Create Questions</h1>
      {fields?.map((field, index) => {
        const RemoveQuestionHandler = () => {
          remove(index);
        };
        return (
          <div key={index}>
            <input
              {...register(`questions.${index}.questionText`)}
              placeholder="Enter Questions"
            />
            <button type="button" onClick={RemoveQuestionHandler}>
              Remove
            </button>

            <CreateChoices questionIndex={index} />
          </div>
        );
      })}

      <button type="button" onClick={AddQuestionHandler}>
        Add Questions
      </button>
    </div>
  );
}

function CreateChoices({ questionIndex }: { questionIndex: number }) {
  const { register, control } = useFormContext<QuestionSetForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.choices`,
  });

  const AddChoicesHandler = () => {
    append({
      label: "",
      text: "",
    });
  };
  return (
    <div>
      {fields?.map((field, index) => {
        const RemoveChoiceHandler = () => {
          remove(index);
        };
        return (
          <div key={index}>
            <input
              {...register(`questions.${questionIndex}.choices.${index}.text`)}
              placeholder="Enter Choice"
            />
            <button type="button" onClick={RemoveChoiceHandler}>
              Remove Choice
            </button>
          </div>
        );
      })}
      <button type="button" onClick={AddChoicesHandler}>
        Add Choicesss
      </button>
    </div>
  );
}

export default CreateQuestionSetForm;
