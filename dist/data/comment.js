"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = void 0;
exports.countAllComments = countAllComments;
exports.printComments = printComments;
exports.comments = [
    {
        commentId: 1,
        commentContent: "Hai",
        replies: [
            {
                commentId: 11,
                commentContent: "Hai juga",
                replies: [
                    { commentId: 111, commentContent: "Haai juga hai jugaa" },
                    { commentId: 112, commentContent: "Haai juga hai jugaa" },
                ],
            },
            {
                commentId: 12,
                commentContent: "Hai juga",
                replies: [{ commentId: 121, commentContent: "Haai juga hai jugaa" }],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: "Halooo",
    },
];
// Fungsi rekursif untuk menghitung semua komentar
function countAllComments(comments) {
    let count = 0;
    for (const comment of comments) {
        count++; // Hitung komentar itu sendiri
        if (comment.replies) {
            count += countAllComments(comment.replies); // Tambah jumlah replies-nya
        }
    }
    return count;
}
// Fungsi untuk menampilkan komentar
function printComments(comments) {
    comments.forEach((comment) => {
        console.log(comment.commentContent);
        if (comment.replies) {
            printComments(comment.replies); // Rekursif untuk menampilkan balasan
        }
    });
}
