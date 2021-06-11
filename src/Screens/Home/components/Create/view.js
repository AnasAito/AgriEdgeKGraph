import React from "react";
import { Fragment, useState } from "react";
import { Disclosure, Menu, RadioGroup, Transition } from "@headlessui/react";
import { HomeIcon, PlusIcon, SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const user = {
  name: "Floyd Miles",
  email: "floydmiles@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Applicants", href: "#" },
  { name: "Company", href: "#" },
];
const breadcrumbs = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const team = [
  {
    name: "mnist clean",
    email: "code",
    imageUrl:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "mnist dataset",
    email: "dataset",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "mnist cnn vanilla notebook",
    email: "code",
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const settings = [
  {
    name: "Public access",
    description: "This project would be available to anyone who has the link",
  },
  {
    name: "Private to Project Members",
    description: "Only members of this project would be able to access",
  },
  {
    name: "Private to you",
    description: "You are the only one able to access this project",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function View() {
  const [selected, setSelected] = useState(settings[0]);
  return (
    <div>
      {" "}
      <form>
        <div className="space-y-6">
          <div>
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              Node Attributes
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Let’s get started by filling in the information below to create
              your new node.
            </p>
          </div>

          <div>
            <label
              htmlFor="project_name"
              className="block text-sm font-medium text-gray-700"
            >
              Node Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project_name"
                id="project_name"
                className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
                defaultValue="CNN original paper"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="node_link"
              className="block text-sm font-medium text-gray-700"
            >
              Node link
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="node_link"
                id="node_link"
                className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
                defaultValue="www.arxiv.com/123"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-1">
              <label
                htmlFor="add_team_members"
                className="block text-sm font-medium text-gray-700"
              >
                Add Node references
              </label>
              <p id="add_team_members_helper" className="sr-only">
                Search by node name
              </p>
              <div className="flex">
                <div className="flex-grow">
                  <input
                    type="text"
                    name="add_team_members"
                    id="add_team_members"
                    className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Email address"
                    aria-describedby="add_team_members_helper"
                  />
                </div>
                <span className="ml-3">
                  <button
                    type="button"
                    className="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                  >
                    <PlusIcon
                      className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Add</span>
                  </button>
                </span>
              </div>
            </div>

            <div className="border-b border-gray-200">
              <ul className="divide-y divide-gray-200">
                {team.map((person) => (
                  <li key={person.email} className="py-4 flex cursor-pointer">
                    <span className="h-10 w-10  bg-green-200 rounded-full" />

                    <div className="ml-3 flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {person.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {person.email}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="mt-1 block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create this Node
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
