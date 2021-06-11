/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function View({ node }) {
  const [open, setOpen] = useState(true);
  console.log("from sidebar", node);
  const tags = ["moisture", "processing", "soil", "moisture", "processing"];
  return (
    <>
      {node == null ? (
        <div>no selected node</div>
      ) : (
        <div className="  w-full  flex flex-col justify-between ">
          {/*title */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">{node.name}</h2>
            <p className="text-sm font-medium text-gray-500">{node.type}</p>
            <div class="flex flex-row flex-wrap mt-2 space-x-1 ">
              {node.tags.map((tag) => (
                <span
                  className={
                    " bg-green-200 my-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div class="">
            <h3 className="font-medium text-gray-900">Description</h3>
            <p class=" h-40  mt-3 bg-gray-100 rounded-md  cursor-pointer border-black  hover:bg-gray-200 p-2 overflow-ellipsis overflow-hidden ">
              {node.description}
            </p>
          </div>
          {/*information*/}
          <div class="">
            <h3 className="font-medium text-gray-900">Information</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              <div className="py-3 flex justify-between text-sm font-medium">
                <dt className="text-gray-500">Uploaded by</dt>
                <dd className="text-gray-900">Marie Culver</dd>
              </div>
              <div className="py-3 flex justify-between text-sm font-medium">
                <dt className="text-gray-500">Created</dt>
                <dd className="text-gray-900">
                  {node.createdAt.split("T")[0]}
                </dd>
              </div>

              <div className="py-3 flex justify-between text-sm font-medium">
                <dt className="text-gray-500">Score</dt>
                <dd className="text-gray-900">{node.score * 100}%</dd>
              </div>
            </dl>
          </div>
          {/*actions */}
          <div className="flex ">
            {node.link ? (
              <button
                type="button"
                href={node.link}
                onClick={() => window.open(node.link, "_blank")}
                className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Visit
              </button>
            ) : (
              <></>
            )}

            <button
              type="button"
              className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Expand
            </button>
          </div>
        </div>
      )}
    </>
  );
}
