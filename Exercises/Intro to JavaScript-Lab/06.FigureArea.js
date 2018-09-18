function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [w * h,
                         W * H,
                         Math.min(w, W) * Math.min(h, H)];

    return s1 + s2 - s3;
}

figureArea(2, 4, 5, 3);
figureArea(12, 2, 5, 8);