"use client";
import { TicketType } from "@/supabase/functions/common/schema";
import { getRecords, insertRecord } from "@/utils/actions";
import { title } from "process";
const Home = () => {
  return (
    <div>
      <button
        onClick={async () => {
          await getRecords();
        }}
      >
        Get Records
      </button>
      <div>
        <form
          className="flex flex-col border-2 border-black place-items-center w-1/6"
          action={async (e) => {
            const data = {
              title: e.get("title"),
              description: e.get("description"),
              department: e.get("department"),
            };
            await insertRecord(data as TicketType);
          }}
        >
          <label className="" htmlFor="title">
            title
          </label>
          <input
            className="border-2 border-black"
            type="text"
            name="title"
            required
          />
          <label className="" htmlFor="description">
            description
          </label>
          <input
            className="border-2 border-black"
            type="text"
            name="description"
            required
          />
          <label className="" htmlFor="department">
            department
          </label>
          <input
            className="border-2 border-black"
            type="text"
            name="department"
            required
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
export default Home;
