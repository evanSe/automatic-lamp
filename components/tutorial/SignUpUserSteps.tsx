import Link from "next/link";
import Step from "../Step";
import Code from "@/components/tutorial/Code";

const create = `
create table tasks (
  id serial primary key,
  task_id text,
  task_name text
);

-- Insert some sample data
insert into tasks (task_id, task_name)
values
 ('dev-7482',	'Update website content'),
 ('des-3157',	'Design new logo'),
 ('mkt-6298',	'Create social media posts'),
 ('sal-9140',	'Prepare sales pitch'),
 ('dev-2073',	'Implement new feature'),
 ('mkt-5406',	'Conduct market research'),
 ('sal-8269',	'Write blog post'),
 ('sal-4921',	'Organize webinar');
`.trim();

const table = `
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { Table } from "@/components/Table";

export default async function Index() {
  const supabase = createClient();

  // get tasks from supabase https://supabase.com/docs/reference/javascript/select
  const { data: tasks } = await supabase.from("tasks").select();
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Table />
      </div>
    </div>
  );
}

`.trim();

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Sign up your first user">
        <p>
          Head over to the{" "}
          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{" "}
          page and sign up your first user. It's okay if this is just you for
          now. Your awesome idea will have plenty of users later!
        </p>
      </Step>

      <Step title="Create some tables and insert some data">
        <p>
          Head over to the{" "}
          <a
            href="https://supabase.com/dashboard/project/_/editor"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            Table Editor
          </a>{" "}
          for your Supabase project to create a table and insert some example
          data. copy and paste the
          following into the{" "}
          <a
            href="https://supabase.com/dashboard/project/_/sql/new"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            SQL Editor
          </a>{" "}
          and click RUN!
        </p>
        <Code code={create} />
      </Step>

      <Step title="You're ready to get started! 🚀">
        <p>Its now time to get creating! replace the code in `app/page.tsx` with the following</p>
        <p>the table is defined in `components/Table.tsx`</p>
        <Code code={table} />
      </Step>
    </ol>
  );
}
