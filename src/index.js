import BookReader from './BookReader.vue';

export { BookReader };
export default BookReader;

// Optional Vue plugin: app.use(BookReaderPlugin) registers <BookReader>.
export const BookReaderPlugin = {
    install(app, options = {}) {
        app.component(options.name || 'BookReader', BookReader);
    },
};
