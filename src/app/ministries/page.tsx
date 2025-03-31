"use client";
import Link from "next/link";

const ministries = [
    { slug: "gospel-crusades", name: "Gospel Crusades" },
    { slug: "church-leadership", name: "Church Leadership Conferences" },
    { slug: "youth-ministry", name: "Youth Ministry" },
    { slug: "children-ministry", name: "Children Ministry" },
    { slug: "humanitarian", name: "Humanitarian Work" },
    { slug: "Women-ministry", name: "Women Ministry" },
    { slug: "Bible-distribution", name: "Bible Distribution" },
    { slug: "persecution", name: "Persecution" },
    { slug: "outreach-ministry", name: "Outreach Ministry" },
];

export default function MinistriesPage() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-blue-800 text-center">Our Ministries</h1>
            <p className="text-gray-600 mt-2 text-center">Explore our different ministries and their work.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {ministries.map((ministry) => (
                    <Link
                        key={ministry.slug}
                        href={`/ministries/${ministry.slug}`}
                        className="block bg-blue-100 hover:bg-blue-200 text-blue-950 font-semibold text-lg p-6 rounded-xl shadow-lg transition duration-300 text-center"
                    >
                        {ministry.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
