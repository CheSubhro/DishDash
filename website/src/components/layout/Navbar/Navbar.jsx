
import React from 'react';
import {
    Input,
    Dropdown,
    Avatar,
} from '@heroui/react';

import {
    FiSearch,
    FiBell,
    FiSettings,
    FiChevronDown,
    FiLogOut,
    FiUser,
} from 'react-icons/fi';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
            <header className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* ================= BRAND ================= */}
                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md">
                        <span className="text-lg font-bold text-white">
                            C
                        </span>
                    </div>

                    <div className="hidden sm:block">
                        <h1 className="text-lg font-bold text-slate-800">
                            CheAdmin
                        </h1>

                        <p className="text-[11px] text-slate-500">
                            Admin Dashboard
                        </p>
                    </div>

                </div>


                {/* ================= SEARCH ================= */}
                <div className="hidden flex-1 justify-center px-8 md:flex">
                    <div className="relative w-full max-w-[420px]">

                        <FiSearch
                            className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400"
                            size={18}
                        />

                        <Input
                            placeholder="Search anything..."
                            size="sm"
                            className="w-full"
                        />

                    </div>
                </div>


                {/* ================= ACTIONS ================= */}
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Mobile Search */}
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 md:hidden"
                    >
                        <FiSearch size={19} />
                    </button>


                    {/* Notification */}
                    <button
                        type="button"
                        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100"
                    >
                        <FiBell size={20} />

                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                    </button>


                    {/* Settings */}
                    <button
                        type="button"
                        className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 sm:flex"
                    >
                        <FiSettings size={20} />
                    </button>


                    <div className="hidden h-8 w-px bg-slate-200 sm:block" />


                    {/* ================= USER DROPDOWN ================= */}
                    <Dropdown>

                        <Dropdown.Trigger
                            aria-label="Open user menu"
                            className="group flex items-center gap-3 rounded-xl px-2 py-1.5 outline-none hover:bg-slate-50"
                        >
                            <Avatar className="h-10 w-10">
                                <Avatar.Image
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    alt="Che Subhro"
                                />

                                <Avatar.Fallback>
                                    CS
                                </Avatar.Fallback>
                            </Avatar>

                            <div className="hidden text-left lg:block">
                                <p className="text-sm font-semibold text-slate-800">
                                    Che Subhro
                                </p>

                                <p className="text-xs text-slate-500">
                                    Administrator
                                </p>
                            </div>

                            <FiChevronDown
                                size={16}
                                className="hidden text-slate-400 lg:block"
                            />
                        </Dropdown.Trigger>


                        <Dropdown.Popover placement="bottom end">
                            <Dropdown.Menu
                                aria-label="User menu"
                                onAction={(key) => {
                                    console.log('Selected:', key);
                                }}
                            >

                                <Dropdown.Item
                                    id="profile"
                                    textValue="Profile"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            Che Subhro
                                        </span>

                                        <span className="text-xs text-slate-500">
                                            chesubhro@example.com
                                        </span>
                                    </div>
                                </Dropdown.Item>


                                <Dropdown.Item
                                    id="my-profile"
                                    textValue="My Profile"
                                >
                                    <div className="flex items-center gap-3">
                                        <FiUser size={17} />
                                        <span>My Profile</span>
                                    </div>
                                </Dropdown.Item>


                                <Dropdown.Item
                                    id="settings"
                                    textValue="Settings"
                                >
                                    <div className="flex items-center gap-3">
                                        <FiSettings size={17} />
                                        <span>Settings</span>
                                    </div>
                                </Dropdown.Item>


                                <Dropdown.Item
                                    id="logout"
                                    textValue="Log Out"
                                    variant="danger"
                                >
                                    <div className="flex items-center gap-3">
                                        <FiLogOut size={17} />
                                        <span>Log Out</span>
                                    </div>
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Popover>

                    </Dropdown>

                </div>

            </header>
        </nav>
    );
};

export default Navbar;