/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function View({ node }) {
  const [open, setOpen] = useState(true);
  console.log("from sidebar", node);
  return (
    <>
      {node == null ? (
        <div>no selected node</div>
      ) : (
        <div className="  w-full  ">
          {/*title */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">{node.name}</h2>
            <p className="text-sm font-medium text-gray-500">{node.type}</p>
          </div>
          <div class="pt-4">
            <h3 className="font-medium text-gray-900">Description</h3>
            <p class=" h-40  mt-3 bg-gray-100 rounded-md  cursor-pointer border-black  hover:bg-gray-200 p-2 overflow-ellipsis overflow-hidden ">
              {node.description}
            </p>
          </div>
          {/*information*/}
          <div class="pt-4">
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
        </div>
      )}
    </>
  );
}
